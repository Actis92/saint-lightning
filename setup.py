from setuptools import setup, find_packages

setup(
    name='lit_saint',
    version='0.0.1',
    license='MIT',
    description='Pytorch Lightning implementation of SAINT Model',
    author='Luca Actis Grosso',
    author_email='lucaactisgrosso@gmail.com',
    # REPLACE WITH YOUR OWN GITHUB PROJECT LINK
    url='https://github.com/Actis92/saint-lightning.git',
    download_url='https://github.com/Actis92/saint-lightning.git/archive/v_001.tar.gz',
    keywords=['TABULAR', 'SELF SUPERVISED', 'PYTORCH LIGHTNING'],
    install_requires=['pytorch-lightning>=1.3.8,<2',
                      'torch>=1.4',
                      'einops>=0.3.0',
                      'pandas>=1.3',
                      'scikit-learn>=0.24.2',
                      'hydra-core>=1.1.0'
                      ],
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: MIT License',   # Again, pick a license
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
      ],
    packages=find_packages(),
)