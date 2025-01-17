import { H1Icon } from "@heroicons/react/16/solid"
import { styled } from "@mui/material"

const Hero = () => {

    const StyledHero  = styled("div")(()=>({
        backgroundColor: "black"
    }))

    const Body = styled("body")(()=>({
        position: "relative",
        width:"100vw",
        height: "10vw",
        minHeight:"1vh",
        maxWidth:"97vw",
        maxHeight:"100vw",
        margin:"0 auto",

    }))

    const Square = styled("div")(()=>({
        border: "1px solid black",
        width:"99%", 
        height: "0",
        paddingBottom:"45%",
        margin: "1%",
        float: "left",
        position: "relative",
    }))

    return (
        <>
        <Body>
        <Square>
          <h1 >Vinicius Mihael</h1>
            
            <textarea>
                Nascido no dia 04 de setembro de 2003 o homem
            </textarea>
        </Square>
        </Body>
        </>
    )
}

export default Hero