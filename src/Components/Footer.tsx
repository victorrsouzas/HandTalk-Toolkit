import * as React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";


const FooterComponent = styled("div")({
    display: "flex",
    position: "absolute",
    bottom: 0,
    marginTop: 20,
    zIndex: 50,
    padding: 10,
    background: "#F5FBFF",
    width: "100%",
    //marginLeft: "-25px",
    color: "white",
})


export interface IFooterProps { }

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <>
            <FooterComponent>
                <Typography color="#ffa500" sx={{ ml: 2 }}>
                    <Typography component="span" fontWeight="500" >@Teste HandTalk</Typography> - Todos os Direitos Reservados
                </Typography>
            </FooterComponent>
        </>
    );
};
export default Footer; 