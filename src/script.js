function act(value)
{
calc.input.value += value;
}

function clr()
{
calc.input.value = '';
}

function equ()
{
calc.input.value = eval(calc.input.value);
}

