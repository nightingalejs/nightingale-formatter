import levels from 'nightingale-levels';

const levelToStyles = {
    [levels.TRACE]: ['gray'],
    [levels.DEBUG]: ['gray'],
    // [levels.INFO]: ['gray'],
    [levels.WARN]: ['orange'],
    [levels.ERROR]: ['red', 'bold'],
    [levels.CRITICAL]: ['red', 'bold'],
    [levels.FATAL]: ['bgRed', 'white'],
    [levels.EMERGENCY]: ['bgRed', 'white'],
};

export default levelToStyles;
