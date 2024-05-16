function typeConsole(type = "log") {
    console[type]("Đây là type: " + type);
}

// 
typeConsole(); // In ra log


typeConsole("warn"); // In ra:warn


typeConsole("error"); // In ra error
