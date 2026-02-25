export function cleanAndTokenize(text: string): string[] {
    return text
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[?¿!¡.,]/g, "")
        .split(/\s+/)
        .filter(word => word.length > 2);
}