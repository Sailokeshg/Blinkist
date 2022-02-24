import { Avatar } from "@material-ui/core";
import { makeStyles } from "@mui/styles";


// const useStyle = makeStyles({
//   avatar: {
//     backgroundColor:"#69A6E3",
//   }
// });

const LoginAvatar = () => {
  const useStyle = makeStyles({
    avatar: {
      backgroundColor:"#69A6E3",
    }
  });
  const classes = useStyle();
  return <Avatar className={classes.avatar} > A </Avatar>;
};

export default LoginAvatar;
