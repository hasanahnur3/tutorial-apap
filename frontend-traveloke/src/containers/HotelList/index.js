
/////////////////////////////////////////////////////////////////


import React, { Component } from "react";
import Hotel from "../../components/Hotel";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import classes from "./styles.module.css";
import APIConfig from "../../api/APIConfig";
import ReactPaginate from 'react-paginate';

class HotelList extends Component {
constructor(props) {
super(props);
this.state = {
    hotels: [
        // {
        // id: 1,
        // namaHotel: "Hotel Papa",
        // alamat: "Depok",
        // nomorTelepon: "08211234",
        // },
        // {
        // id: 2,
        // namaHotel: "Hotel Mama",
        // alamat: "Jekardah",
        // nomorTelepon: "08211234",
        // },
        // {
        // id: 1,
        // namaHotel: "Hotel Dede",
        // alamat: "Thepok",
        // nomorTelepon: "08211234",
        // }
    ],
    isLoading: false,
    isCreate: false,
    isEdit: false,
    offset: 0,
    perPage: 5,
    currentPage: 0,
    textFilter: "",
    namaHotel: "",
    alamat: "",
    nomorTelepon: "",
    };
    this.handleClickLoading = this.handleClickLoading.bind(this);
    this.handleAddHotel = this.handleAddHotel.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmitAddHotel = this.handleSubmitAddHotel.bind(this);
    this.handleEditHotel = this.handleEditHotel.bind(this);
    this.handleSubmitEditHotel = this.handleSubmitEditHotel.bind(this);
    this.handleDeleteHotel = this.handleDeleteHotel.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChangeFieldFilter = this.handleChangeFieldFilter.bind(this);

}

handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadData()
    });

};

async handleDeleteHotel(id) {
    try {
    await APIConfig.delete(`/hotel/${id}`);
    this.loadData();
    } catch (error) {
    alert("Oops terjadi masalah pada server");
    console.log(error);
    }
}  

async handleSubmitEditHotel(event) {
    event.preventDefault();
    try {
    const data = {
    namaHotel: this.state.namaHotel,
    alamat: this.state.alamat,
    nomorTelepon: this.state.nomorTelepon,
    };
    await APIConfig.put(`/hotel/${this.state.id}`, data);
    this.loadData();
    } catch (error) {
    alert("Oops terjadi masalah pada server");
    console.log(error);
    }
    this.handleCancel(event);
}

handleEditHotel(hotel) {
    this.setState({
    isEdit: true,
    id: hotel.id,
    namaHotel: hotel.namaHotel,
    alamat: hotel.alamat,
    nomorTelepon: hotel.nomorTelepon,
    });
 }

    
handleAddHotel() {
    this.setState({ isCreate: true });
}

handleCancel(event) {
    event.preventDefault();
    this.setState({ isCreate: false, isEdit: false });
    this.setState({ namaHotel: "" });
    this.setState({ alamat: "" });
    this.setState({ nomorTelepon: "" });
}
    
handleClickLoading() {
        const currentLoading = this.state.isLoading;
        this.setState({ isLoading: !currentLoading });
        console.log(this.state.isLoading);
}

        
componentDidMount() {
    console.log("componentDidMount()");
    this.loadData();
}

async loadData() {
    await APIConfig.get("/hotels")
        .then(res => {
            const data = res.data;
            const data2 = data.filter(h => h.namaHotel.includes(this.state.textFilter)).map((hotel) => 
            <Hotel
            key={hotel.id}
            listKamar={hotel.listKamar}
            id={hotel.id}
            namaHotel={hotel.namaHotel}
            alamat={hotel.alamat}
            nomorTelepon={hotel.nomorTelepon}
            handleEdit={() => this.handleEditHotel(hotel)}
            handleDelete={() => this.handleDeleteHotel(hotel.id)}
            />
      )
      const postData = data2.slice(this.state.offset, this.state.offset + this.state.perPage);
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                postData
            })
        });
}

// async loadData() {
//     try {
//     const { data } = await APIConfig.get("/hotels");
//     this.setState({ hotels: data });
//     } catch (error) {
//     alert("Oops terjadi masalah pada server");
//     console.log(error);
//     }
// }

async handleSubmitAddHotel(event) {
    event.preventDefault();
    try {
    const data = {
    namaHotel: this.state.namaHotel,
    alamat: this.state.alamat,
    nomorTelepon: this.state.nomorTelepon,
    };
    await APIConfig.post("/hotel", data);
    this.loadData();
    } catch (error) {
    alert("Oops terjadi masalah pada server");
    console.log(error);
    }
    this.handleCancel(event);
}
    
        

shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
}

handleChangeField(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
}

handleChangeFieldFilter(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.loadData();
}
    

    render() {
        console.log("render()");
        return (

        //1
        // <div>
        // <h1>All Hotels</h1>
        // <p>Hotel 1, 2, 3, dst</p>
        // <button onClick={this.handleClickLoading}>Change State</button>
        // </div>

        //2
        <div className={classes.hotelList}>
        <h1 className={classes.title}>All Hotels</h1>

        <Button onClick={this.handleAddHotel} variant="primary">
        Add Hotel
        </Button>
        
        <h4>Cari Hotel</h4>
        <input
        className={classes.textField}
        type="text"
        placeholder="Cari Hotel"
        name="textFilter"
        value={this.state.textFilter}
        onChange={this.handleChangeFieldFilter}
        />

        <div>
        {/* {this.state.hotels.filter(h => h.namaHotel.includes(this.state.textFilter)).map((hotel) => (
        <Hotel
        key={hotel.id}
        listKamar={hotel.listKamar}
        id={hotel.id}
        namaHotel={hotel.namaHotel}
        alamat={hotel.alamat}
        nomorTelepon={hotel.nomorTelepon}
        handleEdit={() => this.handleEditHotel(hotel)}
        handleDelete={() => this.handleDeleteHotel(hotel.id)}
        />
        ))} */}

                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={classes.pagination}
                    subContainerClassName={classes.pagination, classes.page}
                    activeClassName={classes.active}/>

        </div>

        <Modal show={this.state.isCreate || this.state.isEdit} handleCloseModal={this.handleCancel}>
        <form>

        <h3 className={classes.modalTitle}>
{this.state.isCreate
? "Add Hotel"
: `Edit Hotel Nomor ${this.state.id}`}
</h3>

        <input
        className={classes.textField}
        type="text"
        placeholder="Nama Hotel"
        name="namaHotel"
        value={this.state.namaHotel}
        onChange={this.handleChangeField}
        />

        <input
        className={classes.textField}
        type="text"
        placeholder="Alamat"
        name="alamat"
        value={this.state.alamat}
        onChange={this.handleChangeField}
        />

        <textarea
        className={classes.textField}
        placeholder="Nomor Telepon"
        name="nomorTelepon"
        rows="4"
        value={this.state.nomorTelepon}
        onChange={this.handleChangeField}
        />

        <Button
        onClick={
        this.state.isCreate
        ? this.handleSubmitAddHotel
        : this.handleSubmitEditHotel
        }
        variant="primary"
        >
        {this.state.isCreate ? "Create" : "Edit"}
        </Button>

        <Button onClick={this.handleCancel} variant="danger">
        Cancel
        </Button>

        </form>
        </Modal>

        </div>

        


        );
}
}
export default HotelList;

/////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from "react";
// import Hotel from "../../components/Hotel";
// import Button from "../../components/Button";
// import Modal from "../../components/Modal";
// import classes from "./styles.module.css";
// import APIConfig from "../../api/APIConfig";
// import ReactPaginate from 'react-paginate';

// class HotelList extends Component {
// constructor(props) {
// super(props);
// this.state = {
//     hotels: [
//     ],
//     isLoading: false,
//     isCreate: false,
//     isEdit: false,
//     currentPage: 1,
//     todosPerPage: 5,
//     textFilter: "",
//     namaHotel: "",
//     alamat: "",
//     nomorTelepon: "",
//     };
//     this.handleClickLoading = this.handleClickLoading.bind(this);
//     this.handleAddHotel = this.handleAddHotel.bind(this);
//     this.handleCancel = this.handleCancel.bind(this);
//     this.handleChangeField = this.handleChangeField.bind(this);
//     this.handleSubmitAddHotel = this.handleSubmitAddHotel.bind(this);
//     this.handleEditHotel = this.handleEditHotel.bind(this);
//     this.handleSubmitEditHotel = this.handleSubmitEditHotel.bind(this);
//     this.handleDeleteHotel = this.handleDeleteHotel.bind(this);
//     this.handlePageClick = this.handlePageClick.bind(this);
//     this.handleChangeFieldFilter = this.handleChangeFieldFilter.bind(this);
//     this.handleClick = this.handleClick.bind(this);

// }
// handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
// }


// handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;

//     this.setState({
//         currentPage: selectedPage,
//         offset: offset
//     }, () => {
//         this.loadData()
//     });

// };

// async handleDeleteHotel(id) {
//     try {
//     await APIConfig.delete(`/hotel/${id}`);
//     this.loadData();
//     } catch (error) {
//     alert("Oops terjadi masalah pada server");
//     console.log(error);
//     }
// }  

// async handleSubmitEditHotel(event) {
//     event.preventDefault();
//     try {
//     const data = {
//     namaHotel: this.state.namaHotel,
//     alamat: this.state.alamat,
//     nomorTelepon: this.state.nomorTelepon,
//     };
//     await APIConfig.put(`/hotel/${this.state.id}`, data);
//     this.loadData();
//     } catch (error) {
//     alert("Oops terjadi masalah pada server");
//     console.log(error);
//     }
//     this.handleCancel(event);
// }

// handleEditHotel(hotel) {
//     this.setState({
//     isEdit: true,
//     id: hotel.id,
//     namaHotel: hotel.namaHotel,
//     alamat: hotel.alamat,
//     nomorTelepon: hotel.nomorTelepon,
//     });
//  }

    
// handleAddHotel() {
//     this.setState({ isCreate: true });
// }

// handleCancel(event) {
//     event.preventDefault();
//     this.setState({ isCreate: false, isEdit: false });
//     this.setState({ namaHotel: "" });
//     this.setState({ alamat: "" });
//     this.setState({ nomorTelepon: "" });
// }
    
// handleClickLoading() {
//         const currentLoading = this.state.isLoading;
//         this.setState({ isLoading: !currentLoading });
//         console.log(this.state.isLoading);
// }

        
// componentDidMount() {
//     console.log("componentDidMount()");
//     this.loadData();
// }


// render() {
//     // const { hotels, currentPage, todosPerPage } = this.state;

//     // Logic for displaying current todos
//     const indexOfLastTodo = this.state.currentPage * this.state.todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage;
//     const currentTodos = this.state.hotels.slice(indexOfFirstTodo, indexOfLastTodo);

//     const renderTodos = currentTodos.filter(h => h.namaHotel.includes(this.state.textFilter)).map((hotel) => {
//       return  <Hotel
//               key={hotel.id}
//               listKamar={hotel.listKamar}
//               id={hotel.id}
//               namaHotel={hotel.namaHotel}
//               alamat={hotel.alamat}
//               nomorTelepon={hotel.nomorTelepon}
//               handleEdit={() => this.handleEditHotel(hotel)}
//               handleDelete={() => this.handleDeleteHotel(hotel.id)}
//               />;
//     });

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(this.state.hotels.length / this.state.todosPerPage); i++) {
//       pageNumbers.push(i);
//     }
//     console.log(pageNumbers);

//     const renderPageNumbers = pageNumbers.map(number => {
//       return (
//         <li
//           key={number}
//           id={number}
//           onClick={this.handleClick}
//         >
//           {number}
//         </li>
//       );
//     });

//     return (
//       <div>

//    <div className={classes.hotelList}>
//  <h1 className={classes.title}>All Hotels</h1>

//    <Button onClick={this.handleAddHotel} variant="primary">
//   Add Hotel
//   </Button>
        
//   <h4>Cari Hotel</h4>
//   <input
//         className={classes.textField}
//         type="text"
//         placeholder="Cari Hotel"
//         name="textFilter"
//         value={this.state.textFilter}
//         onChange={this.handleChangeFieldFilter}
//         />




//         <ul>
//           {renderTodos}
//         </ul>
//         <ul id={classes.pagenumbers}>
//           {renderPageNumbers}
//         </ul>
//       </div>
//       </div>
//     );
//   }

// async loadData() {
//     try {
//     const { data } = await APIConfig.get("/hotels");
//     this.setState({ hotels: data });
//     } catch (error) {
//     alert("Oops terjadi masalah pada server");
//     console.log(error);
//     }
// }

// async handleSubmitAddHotel(event) {
//     event.preventDefault();
//     try {
//     const data = {
//     namaHotel: this.state.namaHotel,
//     alamat: this.state.alamat,
//     nomorTelepon: this.state.nomorTelepon,
//     };
//     await APIConfig.post("/hotel", data);
//     this.loadData();
//     } catch (error) {
//     alert("Oops terjadi masalah pada server");
//     console.log(error);
//     }
//     this.handleCancel(event);
// }
    
        

// shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate()");
//     return true;
// }

// handleChangeField(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
// }

// handleChangeFieldFilter(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//     this.loadData();
// }
    

// //     render() {
// //         console.log("render()");
// //         return (

// //         //1
// //         // <div>
// //         // <h1>All Hotels</h1>
// //         // <p>Hotel 1, 2, 3, dst</p>
// //         // <button onClick={this.handleClickLoading}>Change State</button>
// //         // </div>

// //         //2
// //         <div className={classes.hotelList}>
// //         <h1 className={classes.title}>All Hotels</h1>

// //         <Button onClick={this.handleAddHotel} variant="primary">
// //         Add Hotel
// //         </Button>
        
// //         <h4>Cari Hotel</h4>
// //         <input
// //         className={classes.textField}
// //         type="text"
// //         placeholder="Cari Hotel"
// //         name="textFilter"
// //         value={this.state.textFilter}
// //         onChange={this.handleChangeFieldFilter}
// //         />

// //         <div>

// //                 {this.state.postData}
// //                 <ReactPaginate
// //                     previousLabel={"prev"}
// //                     nextLabel={"next"}
// //                     breakLabel={"..."}
// //                     breakClassName={"break-me"}
// //                     pageCount={this.state.pageCount}
// //                     marginPagesDisplayed={2}
// //                     pageRangeDisplayed={5}
// //                     onPageChange={this.handlePageClick}
// //                     containerClassName={classes.pagination}
// //                     subContainerClassName={classes.pagination, classes.page}
// //                     activeClassName={classes.active}/>

// //         </div>

// //         <Modal show={this.state.isCreate || this.state.isEdit} handleCloseModal={this.handleCancel}>
// //         <form>

// //         <h3 className={classes.modalTitle}>
// // {this.state.isCreate
// // ? "Add Hotel"
// // : `Edit Hotel Nomor ${this.state.id}`}
// // </h3>

// //         <input
// //         className={classes.textField}
// //         type="text"
// //         placeholder="Nama Hotel"
// //         name="namaHotel"
// //         value={this.state.namaHotel}
// //         onChange={this.handleChangeField}
// //         />

// //         <input
// //         className={classes.textField}
// //         type="text"
// //         placeholder="Alamat"
// //         name="alamat"
// //         value={this.state.alamat}
// //         onChange={this.handleChangeField}
// //         />

// //         <textarea
// //         className={classes.textField}
// //         placeholder="Nomor Telepon"
// //         name="nomorTelepon"
// //         rows="4"
// //         value={this.state.nomorTelepon}
// //         onChange={this.handleChangeField}
// //         />

// //         <Button
// //         onClick={
// //         this.state.isCreate
// //         ? this.handleSubmitAddHotel
// //         : this.handleSubmitEditHotel
// //         }
// //         variant="primary"
// //         >
// //         {this.state.isCreate ? "Create" : "Edit"}
// //         </Button>

// //         <Button onClick={this.handleCancel} variant="danger">
// //         Cancel
// //         </Button>

// //         </form>
// //         </Modal>

// //         </div>

        


// //         );
// // }
// }
// export default HotelList;
