import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
export default function HorizontalSlideShow({ data = [] }) {
    const [dataList, setDataList] = useState([])
    const [
        currentImage,
        setCurrent
    ] = useState({})

    useEffect(() => {
        if (data.length) {
            setDataList(data)
            setCurrent(data[0])
        }
    }, [data])

    const middlePosition = dataList.indexOf(dataList[Math.round((dataList.length - 1) / 2)]);

    const handleSelectImage = (id, index) => {
        const dataImage = dataList.filter(item => item.id === id)
        if (!dataImage.length) return
        setCurrent(dataImage[0])

        // Setup current index to middle of array data        
        const element = dataList.splice(index, 1)[0]
        dataList.splice(middlePosition, 0, element)
        setDataList(dataList)
    }

    return (
        <div>
            <div className='mb-24'>
                <Row justify="space-around">
                    {
                        dataList.map((item, index) => <Col key={item.id} className='mr-16'>
                            <div onClick={() => handleSelectImage(item.id, index)} className='horizontal-wrap'>
                                <img src={item.url} className={(item.id === currentImage.id ? 'image-activated' : '') + ' horizontal-wrap__logo'} />

                            </div>
                        </Col>)
                    }
                </Row>


            </div>
            <p>{currentImage.information}</p>
        </div>
    )
}
