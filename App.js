import { Dimensions} from "react-native";
import SignUp from "./signup";
import LoginPage from "./loginPage";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import PasswordPage from "./passwordPage";
import OtpPage from "./otpPage";
import ProfileComp from "./Components/ProfileComp";
import ProfileList from "./profileList";
import Swipe from "./Swipe";
import Chat from "./chat";
import MsgBox from "./Components/msgBox";
import { ChatRoom } from "./chatRoom";



export default function App() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
   <ChatRoom/>
  );
}
