import React, {useState, useEffect} from 'react'
import {Button, Checkbox, Col, Input, List, Row, Spin, Typography} from 'antd'
import {FileWordOutlined} from '@ant-design/icons';
import Http from '../services/Http';

type Props = {}

interface Tarea {
    titulo : string,
    terminada : boolean
}

const TodoListAxios = (props : Props) => {
    const [tarea, setTarea] = useState < Tarea > ({titulo: '', terminada: false})
    const [ lista, setLista] = useState<any[]>([])
    const [ listo, setListo ] = useState(false)
    
    useEffect(()=>{
        obtenerTareas()    
    },[])

    useEffect(()=>{
        if(lista.length > 0){
            setListo(true)
        }
    },[lista])

    const obtenerTareas = async () =>{
        const {data} = await new Http().get('todos')
        setLista(data);
    }

    const crearPost = async () =>{
        const params = { 
            userId : 1,
            title : 'Congreso proxy',
            body : 'Ejemplo congreso proxy'
        }
        await new Http().post('posts', params )
    }

    return ( <> 
    <Row>
        <Col span={6}>
            <Button type='primary' onClick={() =>crearPost()}>Crear post</Button>
        </Col>
        <Col span={12}>
            <Input.Group compact>
                <Input
                    onChange={(ev) => setTarea({titulo: ev.target.value, terminada: false})}
                    style={{
                    width: 'calc(100% - 200px)'
                }}
                    placeholder="large size"
                    prefix={< FileWordOutlined />}/>
                {/* <Button type="primary" onClick={() => agregar()}>Guardar</Button> */}
            </Input.Group>
        </Col>
    </Row> 
    <Row> 
        <Col span={12}>
            {
                !listo ?
                    <Spin size="large" />
                :

                <List
                bordered
                dataSource={lista}
                renderItem={(item, index) => (
                    <List.Item>
                        <>
                            <Typography.Text mark>{ item.title }</Typography.Text>
                        </>
                    </List.Item>
                )}/>
            }
        </Col> 
    </Row>
    </>)
}

export default TodoListAxios