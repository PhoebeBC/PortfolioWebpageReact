import React from 'react';
import MessageStatusSvg from "../assets/svg/MessageStatusSvg";
import { check2, loading1, benefitCard3, benefitCard4} from "../assets";

const MessageStatus = ({ className, children, px, sent }) => {
    const classes = `relative font-code inline-flex items-center justify-center h-11 color-n-1 ${
        px || "px-7"
      } ${className || ""}`;
    const spanClasses = "relative z-10 body-2";
    const message = `${sent ? "Message Sent Successfully" : "No Message Sent"}`;
    const icon = `${sent ? check2 : loading1}`;
    const renderButton = () => (
        <div className={classes}>
            <span className={spanClasses}>{message}</span>
            <img 
                                src={icon} 
                                width={32}
                                height={32}
                                alt="loading"
                                className='m-auto pl-2'
                            />
            {MessageStatusSvg(sent)}
        </div>
    );
    
    return renderButton();
};

export default MessageStatus;
