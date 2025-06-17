const dependencies ={};

export function getDependency(name){
    if (!dependencies[name]){
        throw new Error(`Dependency ${name} not fund`);
    }
    return dependencies[name];
}

export function addDependency(name, dependency){
    if (dependencies[name]){
        throw new Error(`Dependency ${name} alredy existes`);
    }
    dependencies[name] = dependency;
}