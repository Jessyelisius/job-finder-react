import { Store } from "react-notifications-component"


 export const Notify = (props) => {

    Store.addNotification({
        title: props.title,
        message: props.message,
        type: props.type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
       });
}