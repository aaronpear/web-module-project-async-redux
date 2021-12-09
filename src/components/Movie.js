import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getData } from '../actions/actions';
import '../App.css';

const Movie = (props) => {
    useEffect(() => {
        props.getData();
    }, [])


    return (
        <div className='movie-container'>
            <h1>When's the next Marvel film?</h1>
            <p>Days until {props.data.title} releases: {props.data.days_until}</p>
            <img src={props.data.poster_url} alt={`${props.data.title} movie poster`} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        data: state.data
    })
}

export default connect(mapStateToProps, { getData })(Movie);