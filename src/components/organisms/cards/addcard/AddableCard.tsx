import { Card,Grid } from "@mui/material";
import AddToLibraryButton from "../../../atoms/addtolibrarybutton/AddToLibraryButton";
import CardHead from "../../../molecules/card/CardHead";
import { makeStyles ,ThemeProvider} from "@mui/styles";
import {theme} from "../../../../themes/Theme";


interface CardProps {
    bookdetails: {
        image: string,
        name: string,
        author: string,
        time: string,
        readcount: string,
    }[];
}
const AddableCard = (props:CardProps) => {

    const useStyle = makeStyles({
        cardStyle:{
            maxWidth: "297px",
            maxHeight: "490px",
            borderRadius: "8px",
        },
        addableCardGridTwo:{
            marginTop: "10px",
        },
        addableCardGridOne:{
            marginTop: "25px",
            marginLeft: "465px",
            width: "1000px",
        },
        cardAddHead:{
            height:"420.28px",
            width:"297px",
            textAlign:"left",
            justifyContent:"center",
            backgroundColor:"#FFFF",
        },
    
    });

    const classes = useStyle();
    const bookCards = props.bookdetails.map((e) => (
        <Grid item xs={4}>
            <Card className={classes.cardStyle}>
                <Grid container direction="column">
                    <Grid item className={classes.cardAddHead}>
                        <CardHead readcount={e.readcount} image={e.image} bookName={e.name} authorName={e.author}
                        time={e.time}
                        />
                        </Grid>
                        <Grid item >
                            <AddToLibraryButton/>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
    ));
    return(
        <ThemeProvider theme={theme}>
     <Grid container rowSpacing="25px" columnSpacing="20px" className={classes.addableCardGridOne}>
            {bookCards}
     </Grid>
     </ThemeProvider>
    )
}

export default AddableCard;