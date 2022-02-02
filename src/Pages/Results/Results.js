import React from 'react';
import Footer from '../../Shared/Footer';
import NavigationBar from '../../Shared/NavigationBar';
import trans from '../../images/trans.gif'
import logo from '../../images/logo.png'

const Results = () => {
    return (
        <div className='m-3' style={{ paddingTop: 107 }}>
            <NavigationBar></NavigationBar>
            <div className='table-responsive'>
                <table width="650" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <table width="650" className='border ' border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
                                <tr>
                                    <td width="12" align="left" valign="top" background="images/back_left.gif">&nbsp;</td>
                                    <td valign="top">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <form name="result" method="post" action="result.php" onsubmit="return app_form_validator(this)">
                                                        <table width="100% " border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td width="13%">&nbsp;
                                                                    <input type="hidden" name="sr" id="sr" value="3" />
                                                                    <input type="hidden" name="et" id="et" value="0" />
                                                                </td>
                                                                <td width="74%">
                                                                    <fieldset className='shadow border' >
                                                                        <table width="100%"
                                                                            cellpadding="3" cellspacing="0" class="black12bold">
                                                                            <tr>
                                                                                <td width="12%" align="left" valign="middle">&nbsp;</td>
                                                                                <td width="24%" align="left" valign="middle">&nbsp;</td>
                                                                                <td width="7%" align="left" valign="middle">&nbsp;</td>
                                                                                <td width="46%" align="right" valign="middle">&nbsp;</td>
                                                                                <td width="11%" align="left" valign="middle">&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="12%" align="left" valign="middle">&nbsp;</td>
                                                                                <td width="24%" align="left" valign="middle">Examination</td>
                                                                                <td width="7%" align="left" valign="middle">:</td>
                                                                                <td width="46%" align="right" valign="middle"><select name="exam" class="textfield05" id="exam" onchange="fd(this);">
                                                                                    <option value="">Select One</option>
                                                                                    <option value="jsc">JSC/JDC</option>
                                                                                    <option value="ssc">SSC/Dakhil</option>
                                                                                    <option value="ssc_voc">SSC(Vocational)</option>
                                                                                    <option value="hsc">HSC/Alim</option>
                                                                                    <option value="hsc_voc">HSC(Vocational)</option>
                                                                                    <option value="hsc_hbm">HSC(BM)</option>
                                                                                    <option value="hsc_dic">Diploma in Commerce</option>
                                                                                    <option value="hsc">Diploma in Business Studies</option>
                                                                                </select></td>
                                                                                <td width="11%" align="left" valign="middle">&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">Year</td>
                                                                                <td align="left" valign="middle">:</td>
                                                                                <td align="right" valign="middle"><select name="year" class="textfield05" id="year">
                                                                                    <option value="0000" selected>Select One</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option>
                                                                                </select></td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">Roll</td>
                                                                                <td align="left" valign="middle">:</td>
                                                                                <td align="right" valign="middle">
                                                                                    <input name="roll" type="text" class="textfield06" id="roll" maxlength="6" onkeypress="return onlyNumbers()" />
                                                                                </td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">Reg: No</td>
                                                                                <td align="left" valign="middle">:</td>
                                                                                <td align="right" valign="middle">
                                                                                    <input name="reg" type="text" class="textfield06" id="reg" maxlength="10" onkeypress="return onlyNumbers()" />
                                                                                </td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">1 + 1</td>
                                                                                <td align="left" valign="middle">=</td>
                                                                                <td align="right" valign="middle">
                                                                                    <input name="value_s" type="text" class="textfield06" id="value_s" maxlength="4" onkeypress="return onlyNumbers()" />
                                                                                </td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="right" valign="middle"><input type="reset" name="Reset" id="button" value="Reset" />
                                                                                    <input type="submit" name="button2" id="button2" value="Submit" /></td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                                <td align="right" valign="middle">&nbsp;</td>
                                                                                <td align="left" valign="middle">&nbsp;</td>
                                                                            </tr>
                                                                        </table>

                                                                    </fieldset>
                                                                </td>
                                                                <td width="13%">&nbsp;</td>
                                                            </tr>
                                                        </table>
                                                    </form></td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>

                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td><table width="626" border="0" cellspacing="0" cellpadding="0">

                                                    <tr bgcolor="#86c775">
                                                        <td colSpan="5"><img alt=' ' src={trans} width="1" height="5" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="5">
                                                            <img alt=' ' src={trans} width="1" height="1" />
                                                        </td>
                                                    </tr>
                                                    <tr bgcolor="#F2F2F2" >
                                                        <td width="5" align="left" valign="bottom" bgcolor="#F2F2F2" class="footer_text "></td>
                                                        <td width="356" height="70" align="left" valign="middle" bgcolor="#F2F2F2" class="footer_text">&copy;2022  All rights reserved.</td>


                                                        <td className='' width="150" height="70" align="right" valign="middle" bgcolor="#F2F2F2" class="footer_text"><small className='text-secondary'>Powered by</small>
                                                        </td>

                                                        <td class="px-3"> <img alt=' ' src={logo} width="150" /></td>

                                                    </tr>
                                                </table>
                                                </td>
                                            </tr>
                                        </table></td>
                                    <td width="12" align="right" valign="top" background="images/back_right.gif">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="left" valign="top" background="images/back_cor_left_bot.gif">
                                        <img alt='' src={trans} width="12" height="12" />
                                    </td>
                                    <td valign="top" background="images/back_bot.gif">
                                        <img alt='' src={trans} width="12" height="12" />
                                    </td>
                                    <td align="right" valign="top" background="images/back_cor_right_bot.gif"><img alt=' ' src={trans} width="12" height="12" />
                                    </td>
                                </tr>
                            </table></td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Results;