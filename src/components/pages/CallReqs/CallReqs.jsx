import React from 'react';
import { getCallReqs } from '../../../features/callReqs/callReqsSlice';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css'

const CallReq = () => {
    const dispatch = useDispatch()
    const callReqs = useSelector((state)=>state.callReq.callReqs)

    useEffect(() => {
        dispatch(getCallReqs());
      }, [dispatch]);
    return (
        <div>
            {callReqs.map((el) => {
                return(
                <div>
                    <div className={styles.name}>{el.userName}</div>
                    <div className={styles.number}>{el.phoneNumber}</div>
                    <div className={styles.email}>{el.email}</div>
                </div>)
            })}
        </div>
    );
};

export default CallReq;