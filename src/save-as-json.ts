import adjustFilename from './helpers/adjust-filename';

interface Options {
  filename?: number | string;
  isJSON?: boolean;
  replacer?: (((key: string, value: any) => any) & (number | string)[]) | null;
  space?: number | string;
}

function saveAsJSON(data: any, options: Options = {}): void {
  const opt: Options = {
    filename: '%timestamp',
    isJSON: false,
    replacer: null,
    space: 0,
    ...options,
  };

  const dataJSON = opt.isJSON
    ? data
    : JSON.stringify(data, opt.replacer, opt.space);

  const blob = new Blob([dataJSON], { type: 'application/json' });

  const a = document.createElement('a');
  a.download = `${adjustFilename(opt.filename)}.json`;
  a.href = window.URL.createObjectURL(blob);
  a.click();
}

export default saveAsJSON;
