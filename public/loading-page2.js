$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 24,
        color: "#F0E68C",
        starting_position: 50, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "One moment please:)",
    }).circularProgress('animate', 100, 5000);
});
