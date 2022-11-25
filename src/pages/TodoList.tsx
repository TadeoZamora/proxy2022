import React, {useState} from 'react'
import {Button, Checkbox, Col, Input, List, Row, Typography} from 'antd'
import {FileWordOutlined} from '@ant-design/icons';

type Props = {}

interface Tarea {
    titulo : string,
    terminada : boolean
}

const TodoList = (props : Props) => {
    const [lista,
        setLista] = useState < Tarea[] > ([])
    const [tarea,
        setTarea] = useState < Tarea > ({titulo: '', terminada: false})
    const [ terminadas, setTerminadas ] = useState< Tarea[] > ([])

    const agregar = () => {
        setLista(lista.concat(tarea))
    }

    const tareaTerminada = (index : number) =>{
        const terminada = lista.map((item, indx) =>{
            if(indx === index){
                item.terminada = true
            }
            return item
        })
        setLista(terminada)
        const existe = terminadas.find( (item, indx) => indx === index )
        if(existe){
            setTerminadas(lista.filter( (x, i) => i !== index ))
        }else{
            setTerminadas(lista.filter( x => x.terminada ))
        }
    }
    return ( <> <Row>
        <Col span={12}>
            <Input.Group compact>
                <Input
                    onChange={(ev) => setTarea({titulo: ev.target.value, terminada: false})}
                    style={{
                    width: 'calc(100% - 200px)'
                }}
                    placeholder="large size"
                    prefix={< FileWordOutlined />}/>
                <Button type="primary" onClick={() => agregar()}>Guardar</Button>
            </Input.Group>
        </Col>
    </Row> 
    <Row> 
        <Col span={12}>
            <List
                bordered
                dataSource={lista}
                renderItem={(item, index) => (
                <List.Item>
                    <>
                        <Typography.Text mark>{ item.titulo }</Typography.Text>
                        <Checkbox onChange={() => tareaTerminada(index)  }></Checkbox>
                    </>
                </List.Item>
            )}/>
        </Col> 
        <Col span={12}>
            {
                terminadas.map((item,index) =>(
                    <p key={index}>{item.titulo}/ Terminada</p>
                ))
            }
        </Col>
    </Row>
    </>)
}

export default TodoList