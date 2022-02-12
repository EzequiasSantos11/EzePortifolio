import styled from "styled-components";

export const Container = styled.div`
header{
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 75px;
	width: 100%;
	background: #141414;
	position: fixed;
	z-index: 999;
	nav, ul{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		li{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 16px;
			line-height: 20px;
			font-weight: 500;
			cursor: pointer;
			a{
				color: var(--primary-color);
				padding: 1.7rem;
			}
		}	
	}
}
`;