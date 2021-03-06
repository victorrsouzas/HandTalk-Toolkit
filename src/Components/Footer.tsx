import * as React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";


const FooterComponent = styled("div")({
    display: "flex",
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
                    @Teste HandTalk - Todos os Direitos Reservados
                </Typography>
            </FooterComponent>
        </>
    );
};
export default Footer; 