// code your solution here
function saturdayFun(activity ="roller-skate"){
   return `This Saturday, I want to ${activity}!`;
}
function mondayWork(work="go to the office"){
    return`This Monday, I will ${work}.`;
}
const wrapAdjective = function (special = "*") {
	return function (highlight = "a hard worker") {
		return `You are ${special}${highlight}${special}!`;
	};
};