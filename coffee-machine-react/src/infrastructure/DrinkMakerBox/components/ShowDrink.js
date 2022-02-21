import MessageBox from "./MessageBox";

function ShowDrink({command}) {
    const [primaryCommand, ...restOfCommand] = command.split(':');
    const isSendingAMessage = primaryCommand === 'M';
    const imgSrc = getImagePathFromCommand(primaryCommand, restOfCommand);
    const imageClassName = command.replace(/:/g, '-');

    return <div
        role="alert"
        className={`drink-maker-image drink-maker-image--${primaryCommand} ${imageClassName}`}
    >
        {isSendingAMessage ? (
            <MessageBox text={restOfCommand.join('')}/>
        ) : (
            <img src={imgSrc} alt="Selected drink"/>
        )}
    </div>;
}

const drinksImages = {
    T: '/images/tea.png',
    'T-1-0': '/images/tea-with-sugar-stick.png',
    'T-2-0': '/images/tea-with-two-sugar-stick.png',
    C: '/images/coffee.png',
    'C-1-0': '/images/coffee-with-sugar-stick.png',
    'C-2-0': '/images/coffee-with-two-sugar-stick.png',
    H: '/images/chocolate.png',
    'H-1-0': '/images/chocolate-with-sugar-stick.png',
    'H-2-0': '/images/chocolate-with-two-sugar-stick.png',
    O: '/images/orange.png',
    'O-1-0': '/images/orange-with-sugar-stick.png',
    'O-2-0': '/images/orange-with-two-sugar-stick.png',
};

function getImagePathFromCommand(primaryCommand, restOfCommand) {
    const cleanedRestOfCommand = restOfCommand.filter(Boolean);
    const hasMoreCommand = cleanedRestOfCommand.length > 0;
    const imageKey =
        primaryCommand +
        (hasMoreCommand ? `-${cleanedRestOfCommand.join('-')}` : '');
    const imgSrc = drinksImages[imageKey];

    return imgSrc;
};

export default ShowDrink;