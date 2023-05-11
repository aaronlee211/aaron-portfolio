import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import header from '../img/headerimg.svg'


function Banner() {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "Software Engineer", "Full Stack Developer", "Innovative Programmer" ];
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const period = 400;

    useEffect(() => {
        let timer = setInterval(() => {
            time();
        }, delta)

        return () => { clearInterval(timer) }
    }, [text])

    const time = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.25)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} id='intro'>
                        <h1>{`Hello, I'm Aaron Lee`}</h1>
                        <div className='div-span-banner'>
                            <span className='wrap span-banner'>{text}</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
