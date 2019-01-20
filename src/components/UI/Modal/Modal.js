import React, {Component} from 'react'; 
import Aux from '../../../hoc/Aux/Aux'; 
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {

   render() {
      const backgroundStyle = {
         backgroundSize: "cover",
      }
      return (
         <Aux>
            <Backdrop show={this.props.show} toggleBackdrop={this.props.modalClosed} />
               <div
                  style={backgroundStyle}
                  className={(this.props.show ? "modal show" : "modal hide")}>
                  {this.props.children} 
               </div>
         </Aux>
      ); 
   }

}

export default Modal; 