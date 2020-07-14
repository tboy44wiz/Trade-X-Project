import React, {Component} from 'react';
import axios from "axios";
import data from './data';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 57,
                    "name": "GROCERIES",
                    "slug": "groceries",
                    "description": "",
                    "ordering": "1",
                    "price": 24.99,
                    "expire": "2020-06-23",
                    "updated": "2020-06-23 17:54:32"
                },
                {
                    "id": 58,
                    "name": "PERSONAL & BEAUTY CARE ",
                    "slug": "personal-&-beauty-care",
                    "description": "",
                    "ordering": "1",
                    "price": 24.99,
                    "expire": "2020-06-23",
                    "updated": "2020-06-23 17:54:56"
                },
                {
                    "id": 59,
                    "name": "CLEANING ACCESSORIES ",
                    "slug": "cleaning-accessories",
                    "description": "",
                    "ordering": "1",
                    "price": 24.99,
                    "expire": "2020-06-23",
                    "updated": "2020-06-23 21:37:27"
                },
                {
                    "id": 60,
                    "name": "BABY PRODUCT",
                    "slug": "baby-product",
                    "description": "",
                    "ordering": "1",
                    "price": 24.99,
                    "expire": "2020-06-24",
                    "updated": "2020-06-24 02:50:47"
                },
                {
                    "id": 61,
                    "name": "BEER,WINE & SPIRITS",
                    "slug": "beer,wine-&-spirits",
                    "description": "",
                    "ordering": "1",
                    "price": 24.99,
                    "expire": "2020-06-24",
                    "updated": "2020-06-24 02:51:03"
                },
                {
                    "id": 62,
                    "name": "HOME & OFFICE ",
                    "slug": "home-&-office",
                    "description": "",
                    "ordering": "1",
                    "price": 24.99,
                    "expire": "2020-06-24",
                    "updated": "2020-06-24 02:53:45"
                },
                {
                    "id": 63,
                    "name": "PET SUPPLIES",
                    "slug": "pet-supplies",
                    "description": "",
                    "ordering": "1",
                    "price": 24.99,
                    "expire": "2020-06-24",
                    "updated": "2020-06-24 02:56:40"
                }
            ]
        }
    }

    /*componentDidMount() {
        axios({
            method: "get",
                url: (`https://tradex.itskillscenter.com/api/categories`),
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
                },
        })
            .then((response) => {
                const products = response.data;
                console.log(products);
                this.setState({
                    ...this.state,
                    products,
                    /!*name: "",
                    category: "",
                    bar_code: "",
                    action: "",
                    price: "",
                    exp_date: "",
                    created: "",*!/
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }*/

    render() {
        return (
            <div className="main-container">
                <div className="header-wrapper">
                    <p className="header-wrapper__title">All Products</p>
                    <button className="header-wrapper__button">Add New Product</button>
                </div>

                <div className="show-search-wrapper">
                    <div className="show-wrapper">
                        <p>
                            Sho
                            <span className="show-number">10</span>
                            <span>entries</span>
                        </p>
                    </div>

                    <div className="search-wrapper">
                        <div>
                            <label htmlFor="search">Search</label>
                            <input type="text" id="search"/>
                        </div>
                    </div>
                </div>

                {/* Table Starts here */}

                <table className="table">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Ordering</th>
                            <th>Action</th>
                            <th>Price</th>
                            <th>Exp Date</th>
                            <th>Created</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.data.map(function (eachProduct, index) {
                        return (
                            <tr key={ eachProduct.id }>
                                <td>{ index + 1 }</td>
                                <td>{ eachProduct.name }</td>
                                <td>{ eachProduct.slug }</td>
                                <td>{ eachProduct.ordering }</td>
                                <td>{ (<button className="action-button">Edit</button>) }</td>
                                <td>{ eachProduct.price }</td>
                                <td>{ eachProduct.expire }</td>
                                <td>{ eachProduct.updated }</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MainContainer;