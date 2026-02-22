interface IPrinter { print(message : string): void; }
interface IScanner { scan(message : string): void; }

class BasicPrinter implements IPrinter{
    print(message: string) {console.log(`I can print - ${message}`)
    }
}
class Scanner implements IScanner{
    scan(message: string) {console.log(`I can scan - ${message}`)
    }
}

class PhotoPrinter implements IPrinter, IScanner {
    print(message: string) {console.log(`And then I print this message - ${message}`)}
    scan(message: string) { console.log(`At first I am scan this message - ${message}`) }
}
const basicP = new BasicPrinter()
basicP.print("Hello!")
const scan = new Scanner()
scan.scan("Hello!")

const photoprinter = new PhotoPrinter()
photoprinter.scan("Hello")
photoprinter.print("Hello")
