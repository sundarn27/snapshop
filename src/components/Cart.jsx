import React,{ useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import Navbar from './Navbar';
import { useSelector } from 'react-redux'

const Cart = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={200} width={1260} style={{marginLeft:10,marginTop:20}}/>
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} />
                </div>
            </>
        )
    }

  return (
    <div>
        <Navbar/>
        <div className="col-md-6">
            <div className="row">
                { loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Cart;
