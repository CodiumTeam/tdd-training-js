export const drinksImages = {
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

export const getImagePathFromCommand = (primaryCommand, restOfCommand) => {
    const cleanedRestOfCommand = restOfCommand.filter(Boolean);
    const hasMoreCommand = cleanedRestOfCommand.length > 0;
    const imageKey =
        primaryCommand +
        (hasMoreCommand ? `-${cleanedRestOfCommand.join('-')}` : '');
    const imgSrc = drinksImages[imageKey];

    return imgSrc;
};