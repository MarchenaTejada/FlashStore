import React from "react";
import { FaCircleCheck, FaX } from "react-icons/fa6";
import './Message.css';

const Message = ({title, message}) => {
	return (
		<div class="card-message">
			<div class="icon-container">
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