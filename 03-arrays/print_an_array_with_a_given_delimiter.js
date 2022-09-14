function printer(arrays, string) {
    let text = arrays.join(string);
    console.log(text);
    
}

printer(['One', 
    'Two', 
    'Three', 
    'Four', 
    'Five'], 
    '-');

printer(['How about no?', 
        'I',
        'will', 
        'not', 
        'do', 
        'it!'], 
        '_');
