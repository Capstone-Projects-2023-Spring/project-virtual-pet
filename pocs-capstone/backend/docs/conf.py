# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os 
import sys
import django
sys.path.insert(0,os.path.abspath('..'))
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'
django.setup()


project = 'Study Buddies'
copyright = '2023, Mary Clay, Christine Cho, Jay Newman, Katrina Janeczko, Harrison Fedor, Alexander Russakoff'
author = 'Mary Clay, Christine Cho, Jay Newman, Katrina Janeczko, Harrison Fedor, Alexander Russakoff'
release = '0.0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx.ext.todo', 'sphinx.ext.viewcode', 'sphinx.ext.autodoc']

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']
