import { ClassNames } from "@emotion/react";
import { Card,Grid } from "@mui/material";
import AddToLibraryButton from "../../../atoms/addtolibrarybutton/AddToLibraryButton";
import CardHead from "../../../molecules/card/CardHead";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    cardStyle:{
        maxWidth: "284px",
        maxHeight: "490px",
        borderRadius: "8px",
    },
    addableCardGridTwo:{
        marginTop: "10px",
    },
    addableCardGridOne:{
        marginTop: "25px",
        marginLeft: "225px",
        width: "1000px",
    },

});
interface CardProps {
    bookdetails: {
        image: string,
        name: string,
        author: string,
        time: string,
    }[];
}
const AddableCard = (props:CardProps) => {
    const classes = useStyle();
    const bookCards = props.bookdetails.map((e) => (
        <Grid item xs={4}>
            <Card className={classes.cardStyle}>
                <Grid container direction="column">
                    <Grid item>
                        <CardHead image={e.image} bookName={e.name} authorName={e.author}
                        time={e.time}
                        />
                        </Grid>
                        <Grid item className={classes.addableCardGridTwo}>
                            <AddToLibraryButton/>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
    ));
    return(
     <Grid container rowSpacing="25px" columnSpacing="20px" className={classes.addableCardGridOne}>
            {bookCards}
     </Grid>
    )
}

export default AddableCard;