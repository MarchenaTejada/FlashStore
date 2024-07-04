import React from "react";
import { FaCircleCheck, FaX, FaCircleXmark } from "react-icons/fa6";
import './Message.css';

const Message = ({title, message, type}) => {

	return (
		<div class="card-message">
			<div class="icon-container">
				{type === "Success" && 
				<FaCircleCheck />
				}
				{type === "Error" && 
				<FaCircleXmark />
				}
			</div>
			<div class="message-text-container">
				<p class="message-text">{title}</p>
				<p class="sub-text">{message}</p>
			</div>
			<FaX />
		</div>

	);
}

export default Message;