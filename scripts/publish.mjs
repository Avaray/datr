import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const pkgPath = join(root, 'package.json');
const cliPath = join(root, 'cli.mjs');

console.log('🚀 Starting the publish process...');

console.log('📖 Reading package.json to determine version...');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const version = pkg.version;
console.log(`✅ Target version: ${version}`);

console.log('🔧 Synchronizing version in cli.mjs...');
try {
    let cli = readFileSync(cliPath, 'utf8');
    const updatedCli = cli.replace(/const version = '.*?'/, `const version = '${version}'`);

    if (cli === updatedCli) {
        console.log('⚠️  cli.mjs version was already up to date or pattern not found.');
    } else {
        writeFileSync(cliPath, updatedCli);
        console.log('✅ cli.mjs updated with the new version.');
    }
} catch (err) {
    console.error('❌ Error updating cli.mjs:', err.message);
    process.exit(1);
}

console.log(`📦 Running "npm publish" for v${version}...`);
try {
    // Run npm publish in the root directory
    execSync('npm publish', { stdio: 'inherit', cwd: root });
    console.log(`\n🎉 Successfully published datr v${version} to npm!`);
} catch (error) {
    console.error('\n❌ Failed to publish package. Check your npm permissions or version availability.');
    process.exit(1);
}

