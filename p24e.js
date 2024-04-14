// w.a.p to display numbers whose exponential is in the range of 8-36. where user can input power value

power=3
i=1
op=0
while (i<=36) {
    op=i**power
    if (op>=8 && op<=36) {
        console.log(i);
    }
    i++
}