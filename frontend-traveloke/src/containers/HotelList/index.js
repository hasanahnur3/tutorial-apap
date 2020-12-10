// import React, { Component } from "react";
// import Hotel from "../../components/Hotel";
// import Button from "../../components/Button";
// import Modal from "../../components/Modal";
// import classes from "./styles.module.css";
// import APIConfig from "../../api/APIConfig";

// class HotelList extends Component {
// constructor(props) {
// super(props);
// this.state = {
//     hotels: [
//         // {
//         // id: 1,
//         // namaHotel: "Hotel Papa",
//         // alamat: "Depok",
//         // nomorTelepon: "08211234",
//         // },
//         // {
//         // id: 2,
//         // namaHotel: "Hotel Mama",
//         // alamat: "Jekardah",
//         // nomorTelepon: "08211234",
//         // },
//         // {
//         // id: 1,
//         // namaHotel: "Hotel Dede",
//         // alamat: "Thepok",
//         // nomorTelepon: "08211234",
//         // }
//     ],
//     isLoading: false,
//     isCreate: false,
//     isEdit: false,
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

// }

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
    

//     render() {
//         console.log("render()");
//         return (

//         //1
//         // <div>
//         // <h1>All Hotels</h1>
//         // <p>Hotel 1, 2, 3, dst</p>
//         // <button onClick={this.handleClickLoading}>Change State</button>
//         // </div>

//         //2
//         <div className={classes.hotelList}>
//         <h1 className={classes.title}>All Hotels</h1>
//         <Button onClick={this.handleAddHotel} variant="primary">
//         Add Hotel
//         </Button>
//         <div>
//         {this.state.hotels.map((hotel) => (
//         <Hotel
//         key={hotel.id}
//         id={hotel.id}
//         namaHotel={hotel.namaHotel}
//         alamat={hotel.alamat}
//         nomorTelepon={hotel.nomorTelepon}
//         handleEdit={() => this.handleEditHotel(hotel)}
//         handleDelete={() => this.handleDeleteHotel(hotel.id)}
//         />
//         ))}
//         </div>
//         <Modal show={this.state.isCreate || this.state.isEdit} handleCloseModal={this.handleCancel}>
//         <form>

//         <h3 className={classes.modalTitle}>
// {this.state.isCreate
// ? "Add Hotel"
// : `Edit Hotel Nomor ${this.state.id}`}
// </h3>

//         <input
//         className={classes.textField}
//         type="text"
//         placeholder="Nama Hotel"
//         name="namaHotel"
//         value={this.state.namaHotel}
//         onChange={this.handleChangeField}
//         />

//         <input
//         className={classes.textField}
//         type="text"
//         placeholder="Alamat"
//         name="alamat"
//         value={this.state.alamat}
//         onChange={this.handleChangeField}
//         />

//         <textarea
//         className={classes.textField}
//         placeholder="Nomor Telepon"
//         name="nomorTelepon"
//         rows="4"
//         value={this.state.nomorTelepon}
//         onChange={this.handleChangeField}
//         />

//         <Button
//         onClick={
//         this.state.isCreate
//         ? this.handleSubmitAddHotel
//         : this.handleSubmitEditHotel
//         }
//         variant="primary"
//         >
//         {this.state.isCreate ? "Create" : "Edit"}
//         </Button>

//         <Button onClick={this.handleCancel} variant="danger">
//         Cancel
//         </Button>

//         </form>
//         </Modal>

//         </div>

        


//         );
// }
// }
// export default HotelList;

///////////////////////////////////////////////////////////////////


import React, { Component } from "react";
import Hotel from "../../components/Hotel";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import classes from "./styles.module.css";
import APIConfig from "../../api/APIConfig";

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

}

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
    try {
    const { data } = await APIConfig.get("/hotels");
    this.setState({ hotels: data });
    } catch (error) {
    alert("Oops terjadi masalah pada server");
    console.log(error);
    }
}

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
        onChange={this.handleChangeField}
        />

        <div>
        {this.state.hotels.filter(h => h.namaHotel.includes(this.state.textFilter)).map((hotel) => (
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
        ))}
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