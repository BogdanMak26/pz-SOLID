interface ISmartDevice {
    print( message: string): void;
    scan( message: string): void;
    fax( message: string): void;
}

class BasicPrinter implements ISmartDevice {
    print(message: string) { console.log(`I print the next message - ${message}`) }
    scan(message: string) { throw new Error("Not supported"); }
    fax(message: string) { throw new Error("Not supported"); }
}
const basecprinter = new BasicPrinter();
basecprinter.print("Hello I am a PRINTER");
basecprinter.fax("fax");
basecprinter.scan("scan");