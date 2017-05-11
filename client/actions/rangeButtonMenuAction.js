

export const selectRangeButton = (buttonTargetName) => {
	return {
		type: "SELECT_RANGE_BUTTON", payload: buttonTargetName
	}
}



export const customDateSubmit = (customDateRange) => {
	return {
		type: "CUSTOM_DATE", payload: customDateRange
	}
}


