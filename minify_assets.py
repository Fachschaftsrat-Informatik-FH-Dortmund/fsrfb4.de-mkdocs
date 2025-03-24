import os
import htmlmin
import cssmin

def minify_html(input_path):
    try:
        with open(input_path, 'r+', encoding='utf-8') as infile:
            html_content = infile.read()
            minified_html = htmlmin.minify(html_content, remove_empty_space=False)
            infile.seek(0)
            infile.write(minified_html)
            infile.truncate()
        print(f"HTML minified: {input_path}")
    except Exception as e:
        print(f"Error minifying HTML {input_path}: {e}")

def minify_css(input_path):
    if input_path.endswith('.min.css'):
        print(f"Skipping minified CSS: {input_path}")
        return

    try:
        with open(input_path, 'r+', encoding='utf-8') as infile:
            css_content = infile.read()
            minified_css = cssmin.cssmin(css_content)
            infile.seek(0)
            infile.write(minified_css)
            infile.truncate()
        print(f"CSS minified: {input_path}")
    except Exception as e:
        print(f"Error minifying CSS {input_path}: {e}")

def main():
    input_dir = 'site'

    for root, _, files in os.walk(input_dir):
        for filename in files:
            input_path = os.path.join(root, filename)

            if filename.endswith('.html'):
                minify_html(input_path)
            elif filename.endswith('.css'):
                minify_css(input_path)

if __name__ == "__main__":
    main()
