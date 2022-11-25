import React from 'react'
import {Button, Col, Row} from 'antd'
import { useNavigate } from "react-router-dom";

type Props = {}

const Home = (props : Props) => {
    const navigate = useNavigate()

    const redirect = (path : string) =>{
        navigate('/'+path)
    }
    return (
        <Row>
            <Col span={24} style={{
                display : 'flex',
                flexDirection : 'row',
                justifyContent : 'center'
            }}>
                <Button type='primary' onClick={() =>redirect('users')} >
                    Ir a usuarios</Button>
                    <Button type='primary' onClick={() =>redirect('secondary-')} >
                    Ir a pagina secundaria</Button>
            </Col>
        </Row>

    )
}

export default Home