import { useCallback, useRef, useState } from "react";
import parse from 'html-react-parser';

export default function Test() {
  const [fillObj, setfillObj] = useState<any>({});
  const [mutableSvg, setMutableSVG] = useState('');
  const [finalSvg, setFinalSVG] = useState<any>();

  function handleChange(e: any) {
    let file = e.target.files[0];

    let fr = new FileReader();

    fr.onload = function () {

      setfillObj(Object.assign({}, fr.result.toString().replace(/fill=/g, '').replace(/"/g, ' ').split(' ').filter((v: any) => v.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/))));
      // setTXTFile(fr.result.toString().split(' '));
      replaceloop(fr.result, fr.result.toString().replace(/fill=/g, '').split(' ').filter((v: any) => v.match(/^"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"$/)).length);

      console.log(mutableSvg);
      console.log(fillObj);
    }

    fr.readAsText(file);

  }

  const replaceloop = (file: any, amount: number) => {
    let newsvg = file;
    for (let index = 0; index < amount; index++) {
      newsvg = newsvg.toString().replace(/"#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"/, `"{{${index}}}"`);
    }
    setMutableSVG(newsvg)
  }

  const finalLoop = (file: string, obj: any) => {
    let newobj = Object.keys(obj);
    let newsvg = file;
    for (let index = 0; index < newobj.length; index++) {
      newsvg = newsvg.replace(/"{{[0-9]}}"/, `"${obj[index]}"`);
    }
    setFinalSVG(parse(newsvg));
  }

  const downloadBlob = (blob: any, filename: any) => {
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
  }

  const svgRef = useRef<any>();

  const downloadSVG = useCallback(() => {

    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `img_${new Date().toISOString()}.svg`);

  }, []);

  return (
    <div>
      <div>
        <input type='file' id='myFile' name='filename' onChange={(e) => handleChange(e)} />
        <br />

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">{Object.keys(fillObj).map((value: string, id: number) => (
            <input key={id} value={fillObj[value]} onChange={(e) => setfillObj({ ...fillObj, [id]: e.target.value })} />
          ))}</div>

          <button className="text-left p-3 bg-green-200" onClick={() => finalLoop(mutableSvg, fillObj)}>Fill</button>
          <button className="text-left p-3 bg-yellow-200" onClick={downloadSVG}>Download</button>

        </div>


        <div className="size-[10rem]" ref={svgRef}>
          {finalSvg}
        </div>

      </div>
    </div>
  )
}
