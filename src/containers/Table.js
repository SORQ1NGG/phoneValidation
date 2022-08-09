import { useSelector } from 'react-redux';import { Table }  from '../components/Table/Table';import { VisibilityFilter } from "../actions";import {useEffect} from "react";export const GetVisibleTelephone = (phone, filter) => {    const phones  = useSelector(state => state.phones)    const visibilityFilter = useSelector(state => state.visibilityFilter)    useEffect(() => {       GetVisibleTelephone(phones, visibilityFilter)    }, [phones, visibilityFilter])    switch (filter) {        case VisibilityFilter.SHOW_ALL:            return phone        default:            return null    }}export default Table