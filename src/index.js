module.exports = function check(str, bracketsConfig) {

    let order = [];

    for (let i = 0; i < str.length; i++) {

        let current_bracket = str[i];

        
        for (let j = 0; j < bracketsConfig.length; j++) {
        
            let open_bracket = bracketsConfig[j][0];
            let close_bracket = bracketsConfig[j][1];

            if (open_bracket != close_bracket) {
        
                if (current_bracket == open_bracket) {
                    order.push(close_bracket);
                } else if (current_bracket == close_bracket) {
                    let order_last_bracket = order.pop();
                    if (close_bracket != order_last_bracket) return false;
                }
        
            } else {
        
                let order_last_bracket = order[order.length - 1];
                if (
                    current_bracket == open_bracket &&
                    current_bracket != order_last_bracket
                ) {
                    order.push(close_bracket);
                } else if (
                    current_bracket == open_bracket &&
                    current_bracket == order_last_bracket
                ) {
                    order.pop();
                }
            }
        }
    }
    if (order.length != 0) return false;
    return true;
};
