# PyPi Publishing Guide

Learn how to publish your Python package to PyPI so anyone can install it with `pip`.

## Package Structure

```
package_name/
├── your_package/
│   ├── __init__.py
│   └── module.py
├── setup.py
├── README.md
├── LICENSE
└── MANIFEST.in
```

## Setup Configuration

```python

# content in setup.py

from setuptools import setup, find_packages

setup(
    name='your_package_name',
    version='0.1',
    packages=find_packages(),
    description='A simple example package',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    author='Your Name',
    author_email='your.email@example.com',
    url='https://github.com/yourusername/your_package_name',
    install_requires=[
        # List your package dependencies here
    ],
)
```

## Publishing Steps

### 1. Create Accounts

- [PyPI](https://pypi.org/account/register/) - Production index
- [TestPyPI](https://test.pypi.org/account/register/) - For testing

### 2. Build the Package

```bash
# Install build tools
pip install setuptools wheel twine

# Create distribution files
python setup.py sdist bdist_wheel
```

This generates distribution files in the `dist/` directory.

### 3. Test on TestPyPI

```bash
# Upload to TestPyPI
twine upload --repository-url https://test.pypi.org/legacy/ dist/*

# Install from TestPyPI to verify
pip install --index-url https://test.pypi.org/simple/ your-package-name
```

### 4. Upload to PyPI

```bash
# Upload to production PyPI
twine upload dist/*
```

### 5. Install Your Package

```bash
# Install from PyPI
pip install your-package-name
```

## Quick Reference

| Command | Description |
|---------|-------------|
| `python setup.py sdist bdist_wheel` | Build source and wheel distributions |
| `twine upload dist/*` | Upload to PyPI |
| `twine upload --repository testpypi dist/*` | Upload to TestPyPI |

## Tips

- Use [semantic versioning](https://semver.org/) (e.g., `0.1.0`)
- Update `version` in `setup.py` before each release
- Write a good `README.md` - it becomes your PyPI project page
- Add a `LICENSE` file (commonly MIT or Apache 2.0)
- Use `MANIFEST.in` to include additional files in the package