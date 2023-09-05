

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='social'>
                    <a
                        className='whatsapp'
                        to='https://facebook.com'
                        target='_blank'
                    ></a>
                    <a
                        className='linkedin'
                        to='https://linkedin.com'
                        target='_blank'
                    ></a>
                    <a
                        className='github'
                        to='https://github.com/fer-peralta/ppiii-server'
                        target='_blank'
                    ></a>
                </div>
                <p className='footer_copyright'>
                    Copyright 2023 &copy; Todos los derechos reservados
                </p>
            </footer>
        </>
    )
}

export default Footer