export function isValidCommand(command) {
    const [primaryCommand] = command.split(':');

    if (!primaryCommand) return false;

    return ['T', 'C', 'H', 'O', 'M'].includes(primaryCommand);
}