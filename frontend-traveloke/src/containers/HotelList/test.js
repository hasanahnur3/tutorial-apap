import React, {Component} from "react"
import Hotel from "../../components/Hotel";
import classes from "./styles.module.css";
import APIConfig from "../../api/APIConfig"
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ReactPaginate from 'react-paginate';
import './App.css'
// import Axios from "axios";


class HotelList extends Component {
    constructor(props){
        super(props);
        this.state = {
            hotels: [],
            // filterData: [],
            isLoading: false,
            isCreate: false,
            isEdit: false,
            namaHotel: "",
            alamat: "",
            nomorTelepon: "",
            filtered: "",
            offset: 0,
            // data: [],
            tableData:[],
            perPage: 5,
            currentPage: 0,
            listKamar:[]
        };
        this.handleAddHotel = this.handleAddHotel.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleChangeField = this.handleChangeField.bind(this)
        this.handleSubmitAddHotel = this.handleSubmitAddHotel.bind(this)
        this.handleSubmitEditHotel = this.handleSubmitEditHotel.bind(this)
        this.handleDeleteHotel = this.handleDeleteHotel.bind(this)
        this.handleEditHotel = this.handleEditHotel.bind(this)
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
        // this.searchHotelHandler= this.searchHotelHandler.bind(this)
        // this.handleClickLoading = this.handleClickLoading.bind(this)
    }
    componentDidMount(){
        // console.log("componentDidMount()")
        this.loadData();
        this.receivedData()
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
    async loadData() {
        try {
            const { data } = await APIConfig.get("/hotels");
            this.setState({ hotels: data });
        } catch (error) {
            alert("Oops terjadi masalah pada server");
            console.log(error);
        }
    }

    receivedData() {
        APIConfig.get("/hotels").then(res => {
            const data = res.data;
            const sliceData = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                sliceData
            })
        });
    }

    handleAddHotel= () => {
        this.setState({isCreate: true})
        this.clearForm();
    }
    handleCancel(event) {
        event.preventDefault();
        this.setState({ isCreate: false });
        this.setState({isEdit : false});
    }
    handleChangeField(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
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

    handleEditHotel(hotel) {
        this.setState({
            isEdit: true,
            id: hotel.id,
            namaHotel: hotel.namaHotel,
            alamat: hotel.alamat,
            nomorTelepon: hotel.nomorTelepon,
        });
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
    async handleDeleteHotel(id) {
        try {
            await APIConfig.delete(`/hotel/${id}`);
            this.loadData();
        } catch (error) {
            alert("Oops terjadi masalah pada server");
            console.log(error);
        }
    }

    // searchHotelHandler = event => {
    //     this.setState({ filtered: event.target.value });
    //     this.showFilteredData(event.target.value);
    // }
    searchHotelHandler = event => {
        this.setState({ filtered: event.target.value.substr(0,20) });
        // this.showFilteredData(event.target.value);
    }


    clearForm = () => {
        this.setState({
            isEdit: false,
            idHotel: null,
            namaHotel: "",
            alamat: "",
            nomorTelepon: "",
        });
    }
    receivedData() {
        APIConfig.get("/hotels").then(res => {
            const data = res.data;
            const sliceData = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                sliceData
            })
        });
    }


    render(){
        // console.log("render()")
        let filterData = this.state.hotels.filter(
            (hotel) => {
                return hotel.namaHotel.toLowerCase().indexOf(this.state.filtered.toLowerCase()) !==-1;
            }

        );

        return(
            <div className={classes.hotelList}>
                <h1 className={classes.title}>All Hotels</h1>
                <Button onClick={this.handleAddHotel} variant="primary">
                    Add Hotel
                </Button>
                <div>
                    <input placeholder="Cari hotel" type="text" value={this.state.filtered} onChange={this.searchHotelHandler.bind(this)} />
                </div>

                <div>
                    {filterData.map((hotel) => (
                        <Hotel
                            key={hotel.id}
                            id={hotel.id}
                            namaHotel={hotel.namaHotel}
                            alamat={hotel.alamat}
                            nomorTelepon={hotel.nomorTelepon}
                            handleEdit={() => this.handleEditHotel(hotel)}
                            handleDelete={() => this.handleDeleteHotel(hotel.id)}
                            listKamar = {hotel.listKamar}
                        />
                    ))
                    }
                    {/*<input placeholder="Cari hotel" type="text" value={this.state.filtered} onChange={this.searchHotelHandler.bind(this)} />*/}

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
                <div>
                    {this.state.sliceData}
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={1}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                </div>
            </div>

        );
    }
}
export default HotelList