import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head"

const HeadComponent = (props) =>{
    return(
        <>
            <Head>
                <title>{props.children}</title>
            </Head>
        </>
    )
}

export default HeadComponent