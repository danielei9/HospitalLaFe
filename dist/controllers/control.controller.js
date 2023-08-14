"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const child_process_1 = require("child_process");
const start = (req, res) => {
    try {
        (0, child_process_1.exec)("python /opt/HospitalLaFe_FrontEnd/PythonhospiPython.py", (error, stdout, stderr) => {
            if (error) {
                console.error(`{"error": "${error.message.replace("\n", " ").substring(0, error.message.length - 2)}"}`);
                res.status(404).send(`{"error": "${error.message.replace("\n", " ").substring(0, error.message.length - 2)}"}`);
                return;
            }
            if (stderr) {
                console.error(`{"stderr": "${stderr.replace("\n", " ")}"}`);
                res.status(404).send(`{"stderr": "${stderr.replace("\n", " ")}"}`);
                return;
            }
            res.status(200).send(`{"stdout":"${stdout.replace("\n", " ")}"}`);
            console.log(`{"stdout":"${stdout.replace("\n", " ")}"}`);
        });
    }
    catch (error) {
        res.status(404).send(`{"status":"${error.replace("\n", " ").substring(0, error.length - 3)}"}`);
    }
};
exports.start = start;
//# sourceMappingURL=control.controller.js.map