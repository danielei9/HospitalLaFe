// import fs from 'fs';
// import SerialPort from 'serialport';
// export class GcodeController {
//   private readonly port: SerialPort;
//   constructor(port: string, baudRate: number) {
//     this.port = new SerialPort(port, { baudRate });
//   }
//   public async sendGcode(filename: string): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//       fs.readFile(filename, (err, data) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           reject(err);
//         } else {
//           this.port.write(data, (err) => {
//             if (err) {
//               console.error('Error writing to port:', err);
//               reject(err);
//             } else {
//               console.log('Data sent to port');
//               resolve();
//             }
//           });
//         }
//       });
//     });
//   }
//   public async closePort(): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//       this.port.close((err) => {
//         if (err) {
//           console.error('Error closing port:', err);
//           reject(err);
//         } else {
//           console.log('Port closed');
//           resolve();
//         }
//       });
//     });
//   }
// }
//# sourceMappingURL=machine.controller.js.map